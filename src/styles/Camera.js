import { makeStyles } from "@material-ui/core/styles";

export const useCameraEntry = makeStyles(() => ({
  container: {
    margin: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    margin: 20,
  },
  camera: {
    height: '100%',
    width: '100%',
  },
  canvas: {
    height: '100%',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
}));
