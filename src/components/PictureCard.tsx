const PictureCard = ({ title, desc, url }: { title: string, desc: string, url: string }) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={url}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Hobbies</div>
          <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </a>
          <p className="mt-2" style={{ color: "black" }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PictureCard