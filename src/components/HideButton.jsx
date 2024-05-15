import { Button } from '@mui/material';
const handlerClick = () => {};

export const HideButton = props => {
  console.log(props);
  const { hideInformation } = props;
  const { setHideInformation } = props;
  return (
    <Button
      style={{
        marginBottom: 10,
        marginTop: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
      variant="contained"
      onClick={() => setHideInformation(!hideInformation)}
    >
      Hide information
    </Button>
  );
};
