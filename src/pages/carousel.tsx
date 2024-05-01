import { Box, styled } from "@mui/system";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getView } from "../carousel-experiment/rotating-list";
import { useTransition, animated } from "@react-spring/web";

const EX_R = 800;
const EX_L = -200;

export default function CarouselPage() {
  const [idx, setIdx] = useState(0);
  const view = useMemo(() => getView(FULL_LIST, idx, 3), [idx]);
  // const [view, setView] = useState<CardProps[]>([]);

  const transitions = useTransition(view, {
    // from: { opacity: 0, left: 0 },
    initial: (item, index) => {
      console.log(`INITIAL: ${item.value} at position: ${index}`)
      // return ({ left: index === 0 ? EX_L : index === 3 ? EX_R : 'auto' });
      // return { left: index * 100}
      return { opacity: 1, left: index * 100 }
    },
    from: (item, index) => {
      // console.log(`FROM: ${item.value} at position: ${index}`)
      // if (index === 0 || index === 3) {
      //   console.log(`FROM: ${item.value} at position: ${index}`)
      //   return { left: index === 0 ? EX_L :  EX_R }
      // }
      // return ({ left: index === 0 ? EX_L : index === 3 ? EX_R : 'auto' });
      return { opacity: 0, left: index * 100 };
      // return { left: index * 100}
    },
    update: (item, index) => {
      return ({
        left: index * 100,
        opacity: 1
      });
    },
    enter: (item, index) => { 
      // console.log(`ENTERING: ${item.value} at position: ${index}`)
      // return ({ left: index === 0 ? EX_L : index === 3 ? EX_R : index * 100 });
      // return {} 
      // if (index === 0) {
      //   return { left: EX_L, opacity: 0};
      // } else if (index === 5) {
      //   return { left: EX_R, opacity: 0};
      // } else if (index === 4) {
      //   return { left: index * 100, opacity: 0 }
      // } else {
      //   return { left: index * 100, opacity: 1}
      // }
      return { opacity: 1}
    },
    leave: (item, index) => {
      // console.log(`LEAVING: ${item.value} at position: ${index}`)
      // if (index === 0) {
      //   return { left: EX_L, opacity: 0};
      // } else if (index === 5) {
      //   return { left: EX_R, opacity: 0};
      // } else {
      //   return { left: index * 100, opacity: 1}
      // }
      return { opacity: 0 }
    },
    // update: {opacity: 1},
    // enter: (item, index) => {
    //   console.log('enter on item', item.value);
    //   return { opacity: 1 };
    //   // return ({ opacity: 1, left: (index + 1) * 100 });
    // },
    // leave: { opacity: 0 },
    keys: (item) => item.key,
  });

  // useEffect(() => {
  //   console.log('>>>>>>>>>>>>>>> ')
  //   setView(getView(FULL_LIST, idx, 3));
  // }, [idx]);

  return (
    <>
      <Wrapper>
        {transitions((style, item) => (
          <Card sx={{ backgroundColor: item.background }} style={style}>
            {item.value}
          </Card>
        ))}
      </Wrapper>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <button
          onClick={() =>
            {
              setIdx((idx) => (idx == 0 ? FULL_LIST.length - 1 : idx - 1));
              // api.start();
            }
          }
        >
          Previous
        </button>
        <button onClick={() => {
          setIdx((idx) => (idx + 1) % FULL_LIST.length);
          // api.start();
        }}>
          Next
        </button>
      </Box>
    </>
  );
}

const Cv: Record<string, CardProps> = {
  A: { value: "A", key: "A", background: "#227c9d" },
  B: { value: "B", key: "B", background: "#17c3b2" },
  C: { value: "C", key: "C", background: "#ffcb77" },
  D: { value: "D", key: "D", background: "#fef9ef" },
  E: { value: "E", key: "E", background: "#fe6d73" },
  F: { value: "F", key: "F", background: "#227c9d" },
  G: { value: "G", key: "G", background: "#17c3b2" },
  H: { value: "H", key: "H", background: "#ffcb77" },
  I: { value: "I", key: "I", background: "#fef9ef" },
  J: { value: "J", key: "J", background: "#fe6d73" },
};
const FULL_LIST = [Cv.A, Cv.B, Cv.C, Cv.D, Cv.E, Cv.F, Cv.G];

type CardProps = {
  value: string;
  key: string;
  background: string;
};

const Card = styled(animated.div)({
  height: 100,
  width: 100,
  display: "grid",
  placeItems: "center",
  fontSize: 60,
  border: "1px solid grey",
  position: 'absolute'
});

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          width: 600,
          border: "1px solid grey",
          height: 400,
          position: "relative",
          display: "flex",
          gap: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
