type UserLoadingProps = {
  isLoading: boolean,
  error: any
}
export function UserLoading({isLoading, error}: UserLoadingProps) {

  if (isLoading) {
    return <p className="text-stone-700 text-lg  leading-relaxed mb-6">Loading...</p>;
  }

  if (error) {
    return <h1 className="text-stone-700 text-lg  leading-relaxed mb-6">Error: {error.message}</h1>;
  }
}
