import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import './fancy-button.scss';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#222',
    height: 40,
    padding: '0 20px',
    fontWeight: 'bold',
  },
});
export interface FancyButtonProps {
  label: string;
  onClick: CallableFunction;
  disabled: boolean;
}
export default function FancyButton(props: any) {
  const classes = useStyles();
  return (
    <Button {...props} className={['fancy-button', classes.root].join(' ')}>
      {props.children}
    </Button>
  );
}
