import { IoIosArrowDown } from 'react-icons/io'

export default function Header() {
  return (
    <div className="w-full max-w-[100rem] p-5 m-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-light text-light">Gabriel</div>
        <IoIosArrowDown className="text-2xl text-primary"/>
      </div>
      <button className="text-lg font-normal text-dark bg-primary px-6 py-2 rounded-md">Create New Post</button>
    </div>
  );
}
