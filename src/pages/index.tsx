import Card from "@/components/Card";

export default function index() {
  return (
    <div className="w-full max-w-[100rem] p-5 m-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}