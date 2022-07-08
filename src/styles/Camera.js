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
  cameraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  camera: {
    width: 480,
    height: 640,
  },
  canvasContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  canvas: {
    width: 480,
    height: 640,
  },
  link: {
    textDecoration: 'none',
  },
}));
