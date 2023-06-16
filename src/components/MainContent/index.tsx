import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  JorneyFormWrapper,
  ErrorMessage,
  Li,
  Ul,
  ContentWrapper,
  // @ts-ignore
} from "./JorneyForm.style.d.ts";
import axios from "axios";
const createUserFormSchema = z.object({
  nota_fiscal: z.coerce.number({}),
  nome_destino: z.coerce
    .string({
      required_error: "O campo de destino é obrigatório",
      invalid_type_error: "Precisa ser uma letra",
    })
    .min(5, "São necessários no mínimo 2 caracteres."),
  data_ida: z.coerce.date({
    required_error: "O campo de data é obrigatório",
    invalid_type_error: "Precisa ser uma data",
  }),
  valor_diesel: z.coerce
    .string({
      required_error: "O campo de valor do diesel é obrigatório",
    })
    .min(2, "São necessários no mínimo 2 dígitos.")
    .max(5, "Máximo de 5 caracteres excedido"),
  quilometragem_ida: z.coerce
    .string({
      required_error: "O campo de quilimetragem de ida é obrigatório",
      invalid_type_error: "Precisa ser um número",
    })
    .min(2, "São necessários no mínimo 2 dígitos."),
  quilometragem_volta: z.coerce.string({
    required_error: 'O campo de quilometragem de volta é obrigatório',
    invalid_type_error: "Precisa ser um número",
  }),
});

type createUserFormData = z.infer<typeof createUserFormSchema>;

function JorneyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function createUser(data: any) {
    const url = `${process.env.REACT_APP_API_URL}/register`;
    console.log(data.data_ida);
    await axios.post(url, data);
  }
  return (
    <JorneyFormWrapper>
      <form onSubmit={handleSubmit(createUser)}>
        <h2>Cadastro de Viagem</h2>
        <Ul>
          <Li>
            <ContentWrapper>
              <label htmlFor="nome_destino">Nome do Destino</label>
              <Input
                type="text"
                placeholder="São Paulo - SP"
                {...register("nome_destino")}
              />
              <ErrorMessage>
                {errors.nome_destino && errors.nome_destino.message}
              </ErrorMessage>
            </ContentWrapper>
            <ContentWrapper>
              <label htmlFor="data_ida">Data de Partida</label>
              <Input type="date" {...register("data_ida")} />
              <ErrorMessage>
                {errors.data_ida && errors.data_ida.message}
              </ErrorMessage>
            </ContentWrapper>
          </Li>
          <Li>
            <ContentWrapper>
              <label htmlFor="nota_fiscal">Nota Fiscal</label>
              <Input
                type="text"
                placeholder="937027"
                {...register("nota_fiscal")}
              />
              <ErrorMessage>
                {errors.nota_fiscal && errors.nota_fiscal.message}
              </ErrorMessage>
            </ContentWrapper>
            <ContentWrapper>
              <label htmlFor="valor_diesel">Valor Diesel</label>
              <Input
                type="text"
                placeholder="5,79"
                {...register("valor_diesel")}
              />
              <ErrorMessage>
                {errors.valor_diesel && errors.valor_diesel.message}
              </ErrorMessage>
            </ContentWrapper>
          </Li>
          <Li>
            <ContentWrapper>
              <label htmlFor="quilometragem_ida">Quilometragem ida</label>
              <Input
                type="text"
                placeholder="28,5"
                {...register("quilometragem_ida")}
              />
              <ErrorMessage>
                {errors.quilometragem_ida && errors.quilometragem_ida.message}
              </ErrorMessage>
            </ContentWrapper>
            <ContentWrapper>
              <label htmlFor="quilometragem_volta">Quilometragem volta</label>
              <Input
                type="text"
                placeholder="29,5"
                {...register("quilometragem_volta")}
              />
              <ErrorMessage>
                {errors.quilometragem_volta &&
                  errors.quilometragem_volta.message}
              </ErrorMessage>
            </ContentWrapper>
          </Li>
        </Ul>
        <Button type="submit">Salvar</Button>
      </form>
    </JorneyFormWrapper>
  );
}

export default JorneyForm;
