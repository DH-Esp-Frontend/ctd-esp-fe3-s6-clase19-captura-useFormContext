import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {options: string[], name: string}

const SelectField: FC<Props> = ({options, name}) => {
  const { register } = useFormContext()

  return (
    <select {...register(name)}>
        <option key="default" value="default" >Seleciona...</option>
        {options.map(op => <option key={op} value={op} >{op}</option>)}
    </select>
  )
}

export default SelectField