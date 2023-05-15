export function Card({ data }) {
  return (
    <>
      <div className=' w-1/2 h-3/4 mb-3'>
        <img src={data.image} alt='pic' className=' w-40 h-40' />
        <h2 className=' text-center'>{data.name}</h2>
      </div>
    </>
  );
}
