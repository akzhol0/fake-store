type HomePageItemProps = {
  item: any;
}

function HomePageItem({ item }: HomePageItemProps) {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <div className="w-full h-[70%]">
        <img className='w-full h-full object-cover' src={item.image} />
      </div>
      <div className="w-full flex flex-col items-center">
        <span className='flex items-center gap-1 py-1 px-3 text-white bg-red-500 rounded-md my-1'>
          <p>{item.price} $</p>
          <sub className='line-through text-[#afafaf]'>{Math.round((item.price / 5) + item.price)}.99 $</sub>
        </span>
        <p title={item.title} className='text-center h-[44px] overflow-y-hidden text-bold'>{item.title}</p>
        <p>Category: {item.category}</p>
        <span className="absolute top-3 left-3 w-[30px] h-[30px] rounded flex justify-center items-center text-white   bg-red-500">
          {item.rating.rate}
        </span>
      </div>
    </div>
  );
}

export default HomePageItem;
