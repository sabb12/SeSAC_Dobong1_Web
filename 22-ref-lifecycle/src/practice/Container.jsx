export default function Container({ children }) {
  return (
    <>
      <header>POSTLIST 🦔</header>
      <main>{children}</main>
      <footer>{children}</footer>
    </>
  );
}
