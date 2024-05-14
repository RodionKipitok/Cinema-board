import { Button } from '@mui/material';
const handlerClick = () => {};

export const HideButton = props => {
  console.log(props);
  const { hideInformation } = props;
  const { setHideInformation } = props;
  return (
    <Button
      variant="contained"
      onClick={() => setHideInformation(!hideInformation)}
    >
      Hide information
    </Button>
  );
};
