import { Box, styled } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { getView } from "../carousel-experiment/rotating-list";
import { useTransition, animated } from "@react-spring/web";

export default function CarouselPage() {
  const [idx, setIdx] = useState(0);
  const [view, setView] = useState<CardProps[]>([]);

  const transitions = useTransition(view, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    keys: item => item.key
  });

  useEffect(() => {
    setView(getView(FULL_LIST, idx, 3));
  }, [idx]);

  return (
    <>
      <Wrapper>
        {transitions((styles, d) => (
          <animated.div style={styles}>
            <Card {...d} />
          </animated.div>
        ))}
      </Wrapper>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <button
          onClick={() =>
            setIdx((idx) => (idx == 0 ? FULL_LIST.length - 1 : idx - 1))
          }
        >
          Previous
        </button>
        <button onClick={() => setIdx((idx) => (idx + 1) % FULL_LIST.length)}>
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
};
const FULL_LIST = [Cv.A, Cv.B, Cv.C, Cv.D, Cv.E, Cv.F, Cv.G];

type CardProps = {
  value: string;
  key: string;
  background: string;
};

function Card(config: CardProps) {
  return (
    <Box
      key={config.key}
      sx={{
        height: 100,
        width: 100,
        backgroundColor: config.background,
        display: "grid",
        placeItems: "center",
        fontSize: 60,
        border: "1px solid grey",
      }}
    >
      {config.value}
    </Box>
  );
}

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
