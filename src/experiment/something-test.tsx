import { useEffect, useRef } from "react"

const randomText = `
This is just a random text.
This is a better <test className="]Another way to get going

For another way to get going. 
/What is the best way
This is the stuff.
Another way to get going
Way to get going
For way

For getting things, In order. What can you do? For getting things going
This cscammer in particular will photoshop you in 
This person obviously got a new car
I wanted to see if this ifs fake? 

You have to engage in.
Every few years, I feel the need to do some 
Spring cleaning, I feel the need to do some 
Spring cleaning. The amount of times people asked me to call them,
It's an introvert's worst nightmare. 
Ran into old ladies scammers.
Peoplee would want to talk so bad.

Which is Faace
Zerico, 

WhaSo facebook marketplace, its a whole rabbit hole of a video, that you can watch on your own.
What the hell.
That is pretty decent and good enough for me now. 

This is just a trial of how the keyboard performs. 
We still need to get used to the right hand short shift to be honest

Just Gonna dance here and sing you by.
That's all right, because I like the way you lie. 

Just gonna stay here and walk you by

`

function DsModal(props: React.PropsWithChildren) {
  return null
}

type ModalApi = {
  open: () => Promise<boolean>,
  close: () => void
}

function Callee() {
  const ref = useRef<ModalApi>();

  useEffect(() => {
    if (ref.current) {
      ref.current.open().then();
      ref.current.close();
    }
  }, [])

   return <>
    <DsModal>
      <p>Yo!</p>
    </DsModal>
   </>
}