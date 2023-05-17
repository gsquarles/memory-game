export function Card({ data, handleCardClick }) {
  const handleClick = () => {
    handleCardClick(data.name);
  };
  return (
    <>
      <div className=' w-1/2 h-3/4 mb-3' onClick={handleClick} id={data.name}>
        <img src={data.image} alt='pic' className=' w-40 h-40' />
        <h2 className=' text-center capitalize'>{data.name}</h2>
      </div>
    </>
  );
}
