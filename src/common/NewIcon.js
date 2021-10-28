import { useEffect, useRef, useState } from "react";
// import "react-dom";
function useDynamicSVGImport(name, options) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../asset/img/${name}.svg`
          )
        ).default;
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        onError?.(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
const NewIcon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });
  if (error) {
    console.warn("ERROR");
    return error.message;
  }
  if (loading) {
    return "Loading...";
  }
  if (SvgIcon) {
    return (
      <div>
        <SvgIcon {...rest} />
      </div>
    );
  }
  return null;
};

export default NewIcon;
