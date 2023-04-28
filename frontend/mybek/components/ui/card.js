import Image from 'next/image';

function Card() {
  return (
    <div className='flex justify-center'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src="/slider.jpeg" alt="Sunset in the mountains" height={200} width={300}/>
      <div className="px-6 py-4">
        <div className="text-card-title mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Card;
