import { Box } from "@mui/system";
import React from "react";

export default function CarouselPage() {
  const dataList = [Cv.A, Cv.B, Cv.C, Cv.D, Cv.E, Cv.F, Cv.G];
  return (
    <Wrapper>
      {dataList.map(d => <Card {...d} key={d.key} />)}
    </Wrapper>
  );
}

const Cv: Record<string, CardProps> = {
  A: { value: 'A', key: 'A', background: '#227c9d' },
  B: { value: 'B', key: 'B', background: '#17c3b2' },
  C: { value: 'C', key: 'C', background: '#ffcb77' },
  D: { value: 'D', key: 'D', background: '#fef9ef' },
  E: { value: 'E', key: 'E', background: '#fe6d73' },
  F: { value: 'F', key: 'F', background: '#227c9d' },
  G: { value: 'G', key: 'G', background: '#17c3b2' },
}

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
        height: 150,
        width: 150,
        backgroundColor: config.background,
        display: "grid",
        placeItems: "center",
        fontSize: 90,
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
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 600,
          border: "1px solid grey",
          height: 400,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
