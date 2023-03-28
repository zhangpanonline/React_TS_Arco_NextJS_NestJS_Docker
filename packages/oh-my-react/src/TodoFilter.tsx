// 只能导进来类
import styles from './TodoFilter.module.css'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store'
import { VisibilityFilters, setVisibilityFilter } from './store/visibilitySlice'


interface ButtonProps {
  readonly selected: boolean
}
const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  ${(props: any) => props.selected && css`
    border-color: #646cff;
  `}
`

export default function TodoFilter() {

  const visibility = useSelector((state: RootState) => state.visibility)
  const dispatch = useDispatch()

  const onClick = (v: string): void => {
    dispatch(setVisibilityFilter(v))
  }

  return (
    <ul className={ styles.filters } >
      {Object.keys(VisibilityFilters).map(v => (
        <li className={ styles.filtersLi } key={v} >
          <Button selected={visibility === v} onClick={() => onClick(v)} >
            {v}
          </Button>
        </li>
      ))}
    </ul>
  )
}