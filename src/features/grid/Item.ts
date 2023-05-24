import { Theme } from "@material-ui/core";
import { Paper, styled } from "@mui/material";
interface ItemProps {
    theme: Theme,
    fullheight?: any
}
export const Item = styled(Paper)(({ theme, fullheight = false }: ItemProps) => ({
    backgroundColor: '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: 0,
    height: fullheight ? '100vh' : 'auto'
}));