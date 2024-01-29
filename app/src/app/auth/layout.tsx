import Form from "@/components/Form";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <main className="bg-red-400 h-screen flex justify-center items-center">
          <div>
            <Form />
          </div>
        </main>
      </body>
    </html>
  );
}
