import { Helmet } from 'react-helmet-async';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

export default function TestPage() {
    const theme = useTheme();

    return (
        <>
          <Helmet>
            <title> Test Page </title>
          </Helmet>
        </>
    );
}