import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted-foreground">Sayfa bulunamadı</p>
      <Link
        href="/"
        className="mt-6 rounded-full border px-6 py-2 text-sm transition-colors hover:bg-muted"
      >
        Ana Sayfaya Dön
      </Link>
    </main>
  );
}
