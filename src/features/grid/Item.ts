import { Theme } from "@material-ui/core";
import { Paper, styled } from "@mui/material";
interface ItemProps {
    theme: Theme
}
export const Item = styled(Paper)(({ theme }: ItemProps) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));