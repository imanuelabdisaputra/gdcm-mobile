import React from "react";
import { FieldError, useController } from "react-hook-form";
import { Input, InputProps, Text, View } from "tamagui";

interface IInput extends InputProps {
  label: string;
  name: string;
  control: any;
  error?: FieldError;
}

const InputComponent = ({ label, name, control, error, ...props }: IInput) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name
  });

  return (
    <View gap="$2">
      <Text
        fontSize="$4"
        fontWeight={500}
      >
        {label}
      </Text>
      <Input
        {...props}
        value={field.value}
        onChangeText={field.onChange}
      />
      {error && (
        <Text
          fontSize="$2"
          color="red"
        >
          {error.message}
        </Text>
      )}
    </View>
  );
};

export default InputComponent;
