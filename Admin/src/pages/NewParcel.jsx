import { TextField, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { LuPackagePlus } from "react-icons/lu";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

const NewParcel = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [cost, setCost] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const handleSubmit = () => {
    console.log('for submiited');
  }

  return (
    <div className='outlet'>
      <p className='text-center mb-5 text-lg font-bold'>Create New Parcel</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
        <div className='flex flex-row gap-2 w-full'>
          <div className='flex gap-4 w-3/4 flex-col justify-center'>
            <div className='flex gap-1'>
              <TextField 
                label="Sender Name"
                name='sender'
                value={sender}
                onChange={(e) => {setSender(e.target.value)}}
                size='small'
                className='w-1/2'
                required
              />
              <TextField 
                label="Recipient Name"
                name='recipient'
                value={recipient}
                onChange={(e) => {setRecipient(e.target.value)}}
                rows={3}
                size='small'
                className='w-1/2'
                required
              />
            </div>
            <div className='flex gap-1'>
              <TextField 
                label="Sender Email"
                name='senderEmail'
                value={senderEmail}
                onChange={(e) => {setSenderEmail(e.target.value)}}
                rows={3}
                size='small'
                className='w-1/2'
                required
              />
              <TextField 
                label="Recipient Email"
                name='recipientEmail'
                value={recipientEmail}
                onChange={(e) => {setRecipientEmail(e.target.value)}}
                rows={3}
                size='small'
                className='w-1/2'
                required
              />
            </div>
            <div className='flex gap-1'>
              <TextField 
                label="From"
                name='from'
                value={from}
                onChange={(e) => {setFrom(e.target.value)}}
                size='small'
                className='w-1/2'
                required
              />
              <TextField 
                label="To"
                name='to'
                value={to}
                onChange={(e) => {setTo(e.target.value)}}
                rows={3}
                size='small'
                className='w-1/2'
                required
              />
            </div>
          </div>
          <div className='flex gap-4 w-1/3 flex-col'>
            <TextField 
              label="Weight"
              name='weight'
              value={weight}
              onChange={(e) => {setWeight(e.target.value)}}
              rows={3}
              size='small'
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment>Kg</InputAdornment>,
              }}
              required
            />
            <TextField 
              label="Cost"
              name='cost'
              value={cost}
              onChange={(e) => {setCost(e.target.value)}}
              rows={3}
              size='small'
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment>$</InputAdornment>,
              }}
              required
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                label="Date"
                slotProps={{ textField: { size: 'small' } }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div>
          <TextField
            label="Notes"
            multiline
            rows={5}
            fullWidth
          />
        </div>
        <div className='text-right'>
          <Button 
            className='w-fit' 
            variant='outlined'
            endIcon={<LuPackagePlus />}
            sx={{ backgroundColor: 'black', color: 'white', "&:hover": {bgcolor: 'white', color: 'black', borderColor: 'black' } }}
          >
            Create
          </Button>
        </div>
        
      </form>
    </div>
  )
}

export default NewParcel;