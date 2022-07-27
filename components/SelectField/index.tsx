import React, { FC } from 'react'

type Props = {options: string[], name: string}

const SelectField: FC<Props> = ({options, name}) => {
  return (
    <select name={name} defaultValue="default" >
        <option key="default" value="default" disabled hidden >Seleciona...</option>
        {options.map(op => <option key={op} value={op} >{op}</option>)}
    </select>
  )
}

export default SelectField