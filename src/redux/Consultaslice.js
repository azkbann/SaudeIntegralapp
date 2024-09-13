import { createSlice } from '@reduxjs/toolkit';

const Consultaslice = createSlice({
  name: 'consultas',
  initialState: {
    historico: [], 
  },
  reducers: {
    adicionarConsulta: (state, action) => {
      const { id, data, hora, descricao } = action.payload;
      if (data && hora) {
        state.historico = state.historico.map((agendamento) =>
          agendamento.id === id
            ? { ...agendamento, data, hora }
            : agendamento
        );
      } else {
        state.historico = state.historico.filter(
          (agendamento) => agendamento.id !== id
        );
      }
    },
  },
});

export const { adicionarConsulta } = Consultaslice.actions;
export default Consultaslice.reducer;
