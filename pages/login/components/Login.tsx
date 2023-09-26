import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { object, string } from 'yup'
import { Form } from '@/components/Form'
import { LoginPayload } from '@/models/auth'

const INITIAL_VAL_LOGIN_FORM = {
  email: '',
  password: '',
}

const validationSchema = object().shape({
  email: string()
    .required('Please enter email')
    .min(6, 'email is required to have at least 6 characters'),

  password: string()
    .required('Please enter password')
    .min(6, 'Password is required to have at least 6 characters'),
})

const Login = () => {
  const { t } = useTranslation(['common'])
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginPayload>({
    mode: 'onSubmit',
    defaultValues: INITIAL_VAL_LOGIN_FORM,
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <Container maxWidth="lg" className="tw-grow tw-flex tw-items-center">
      <Box className="tw-h-full tw-grow">
        <Grid container justifyContent="center">
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box className="tw-p-4">
              <Typography component="h1" variant="h5">
                {t('hello')}
              </Typography>
              <Form onSubmit={handleSubmit(onSubmit)} className="tw-mt-1">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  helperText={errors.email && (errors.email?.message as string)}
                  {...register('email')}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={
                    errors.email && (errors.password?.message as string)
                  }
                  {...register('password')}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  className="tw-mt-3 tw-mb-2"
                >
                  Sign In
                </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login
