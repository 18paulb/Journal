export function UserLoading(props) {
  const isLoading = props.isLoading;
  const error = props.error;

  if (isLoading) {
    return (
      <p className="text-stone-700 text-lg  leading-relaxed mb-6">Loading...</p>
    );
  }

  if (error) {
    return (
      <h1 className="text-stone-700 text-lg  leading-relaxed mb-6">
        Error: {error.message}
      </h1>
    );
  }
}
