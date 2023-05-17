export function Header({ score, bestScore }) {
  return (
    <>
      <header className=' w-full bg-gray-500 p-4 flex justify-between items-center text-white'>
        <div>
          <h1 className=' text-2xl'>Memory Game</h1>
        </div>
        <div className='text-lg mr-5'>
          <p>Score:{score}</p>
          <p>Best Score:{bestScore}</p>
        </div>
      </header>
    </>
  );
}
