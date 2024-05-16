import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, H4, Spinner, Text, View } from "tamagui";
import { Image } from "tamagui";

import { FormSchema } from "./types";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { supabase } from "@/config/initSupabase";

type IForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: zodResolver(FormSchema)
  });

  const onSubmit: SubmitHandler<IForm> = async (val) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: val.email,
      password: val.password
    });
    if (error) Alert.alert("Salah Woy!!");
    setIsLoading(false);
  };

  return (
    <View
      flex={1}
      justifyContent="center"
    >
      <View marginBottom="$5">
        <Image
          source={{
            uri: "https://ypfsqxsfgglotzlsbynt.supabase.co/storage/v1/object/sign/images/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvbG9nby5wbmciLCJpYXQiOjE3MTU4MzgzMjgsImV4cCI6MTc0NzM3NDMyOH0.7Vvu3kNKUMklhXwzdEFA_v5_9UrDcebUIQ_ZLwPvESM&t=2024-05-16T05%3A45%3A28.417Z",
            height: 80
          }}
          aspectRatio={1}
          alignSelf="center"
        />
        <H4
          textAlign="center"
          fontWeight={700}
        >
          Login
        </H4>
        <Text
          textAlign="center"
          color="$gray10"
        >
          Enter your email below to login to your account.
        </Text>
      </View>
      <Form
        gap="$4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Email"
          name="email"
          placeholder="Email"
          inputMode="email"
          keyboardType="email-address"
          control={control}
          returnKeyType="done"
          error={errors.email}
        />
        <Input
          label="Password"
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          returnKeyType="done"
          error={errors.password}
        />
        <Form.Trigger
          asChild
          marginTop="$5"
        >
          <Button themeInverse>{isLoading ? <Spinner /> : "Login"}</Button>
        </Form.Trigger>
      </Form>
    </View>
  );
};

export default Login;
