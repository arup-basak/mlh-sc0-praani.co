export default function Navbar() {
  return (
    <div className="sticky flex flex-col flex-wrap items-center p-5 bg-black  w-100vw wcontainer mvwx-auto md:flex-row">
      <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
        <img src="" />
      </a>
      <div className="items-center justify-center text-white text wrap backflex md:ml-auto md:mr-auto">
        <a className="mr-5 hover:text-yellow-500">First Link</a>
        <a className="mr-5 hover:text-yellow-500">Second Link</a>
        <a className="mr-5 hover:text-yellow-500">Third Link</a>
        <a className="mr-5 hover:text-yellow-500">Fourth Link</a>
      </div>
      <button className="inline-flex items-center px-3 py-1 mt-4 bg-yellow-500 border-0 md:mt-0">
        Sign in
      </button>
    </div>
  );
}
