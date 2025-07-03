export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay
  return <p>Dashboard Page</p>;
}
