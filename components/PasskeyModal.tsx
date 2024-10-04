'use client'

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image';
  

const PasskeyModal = () => {
    const [open, setOpen]= useState(true);

    const closeModal = () => {
      setOpen(false)
    }


  return (
  <AlertDialog open={open} onOpenChange={setOpen} >
   
    <AlertDialogContent className='shad-aler-dialog'>
    <AlertDialogHeader>
      <AlertDialogTitle className='flex items-start justify-between'>
        Admin Access Verification
        <Image
        src='/assets/icons/close.svg'
        alt='close'
        height={20}
        width={20} 
        onClick={() => closeModal()}
        />
      </AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
</AlertDialog>

  )
}

export default PasskeyModal
