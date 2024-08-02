import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Footer } from '../components';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className='flex justify-between items-center px-5 py-5 w-full bg-black'>
        <img src="/imgs/logo.png" alt="logo" width={90} />
        <Link to={'/login'}>
          <Button
            variant='outlined'
            size='small'
            className='h-fit w-fit'
            sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'black', color: 'white', borderColor: 'white' } }}
          >Login</Button>
        </Link>
      </div>
      <div className='flex flex-1 w-full text-white'>
        <div className='w-1/2 md:w-3/5 flex items-center justify-end'>
          <h1 className='text-3xl w-4/6'>SIMPLE, FAST AND RELIABLE PARCEL DELIVERY SYSTEM</h1>
        </div>
        <div className='w-1/2 md:w-2/5 flex items-center justify-start'>
          <img src="/imgs/brand.png" alt="brand" 
            className='w-4/5 md:w-96'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;