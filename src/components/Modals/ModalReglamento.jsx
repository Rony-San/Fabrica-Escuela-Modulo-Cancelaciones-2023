import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalReglamento({mostrarAd, setMostrarAd}) {
  return (
    <BootstrapDialog open = {mostrarAd}>
      <DialogTitle>Reglamento</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Los/as estudiantes que requieran cancelar el semestre deberán
          diligenciar el formulario para trámite de cancelación de semestre, en
          el que deberán adjuntar una carta en la que autorizan a la Universidad
          de Antioquia realizar el trámite y el paz y salvo del Sistema de
          Bibliotecas. Sobre los paz y salvos para el trámite de las solicitudes
          de cancelación de semestre: Biblioteca: los usuarios que requieren el
          visto bueno y/o paz y salvo del Sistema de Bibliotecas lo pueden
          adquirir mediante el Catálogo Público OPAC. Descarga aquí el
          instructivo y mira cómo hacerlo. Una vez descargado el paz y salvo
          debe adjuntar una captura de pantalla de éste en el formulario
          indicado abajo. Con la información registrada en el formulario el
          Centro de Documentación y la oficina de Bienestar de la Facultad de
          Educación procederán con la revisión para establecer si el/la
          estudiante se encuentra a paz y salvo con estas dependencias. 3. Con
          lo anterior, la Vicedecanatura envía revisa la información y si cumple
          con los requisitos envía la solicitud de cancelación de semestre al
          Departamento de Admisiones y Registro para que sea procesada.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setMostrarAd(false)}>
          Cerrar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
