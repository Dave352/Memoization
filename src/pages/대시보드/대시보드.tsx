import { Fragment, memo, useCallback, useState } from 'react'

import { ButtonProps } from '@musma/react-component'

export const P_대시보드 = () => {
  const [count, setCount] = useState<number>(0)

  const handleCountIncrease = () => {
    setCount((number) => number + 1)
  }

  const onReset = useCallback(() => {
    setCount(0)
  }, [])

  return (
    <Fragment>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 200,
          height: 100,
          border: '1px solid black',
          borderRadius: 10,
        }}
        onClick={handleCountIncrease}
      >
        <p>{count}</p>

        {/* 태그 안에 자식처럼 존재 해야 React Dev Tool에서 리랜더링이 방지되는 것처럼 보이지만 실상은 아니다 */}
        {/* <Button onClick={onReset}>그냥 리셋 버튼</Button> */}
      </div>

      {/* 바깥에 존재하면 React Dev Tool 하이라이트로는 리랜더링이 되는 것처럼 보이지만 실제로는 불필요한 리랜더링이 방지되고 있다 */}
      <Button onClick={onReset}>메모이제이션된 버튼</Button>
    </Fragment>
  )
}

// const Button = (props: ButtonProps) => {
//   console.log('저는 그냥 버튼입니다')
//   return <button {...props} />
// }

const Button = memo((props: ButtonProps) => {
  console.log('저는 메모이제이션된 버튼입니다')
  return <button {...props} />
})

Button.displayName = 'Button'
