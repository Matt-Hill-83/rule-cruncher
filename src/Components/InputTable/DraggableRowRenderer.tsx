import { useDrag, useDrop } from "react-dnd"
import clsx from "clsx"
import css from "./DraggableRowRenderer.module.scss"

import type { RowRendererProps } from "react-data-grid"
import { Row } from "react-data-grid"
import { useCombinedRefs } from "./useCombinedRefs"

interface DraggableRowRenderProps<R, SR> extends RowRendererProps<R, SR> {
  onRowReorder: (sourceIndex: number, targetIndex: number) => void
}

export function DraggableRowRenderer<R, SR>({
  rowIdx,
  isRowSelected,
  className,
  onRowReorder,
  ...props
}: DraggableRowRenderProps<R, SR>) {
  const [{ isDragging }, drag] = useDrag({
    type: "ROW_DRAG",
    item: { index: rowIdx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ isOver }, drop] = useDrop({
    accept: "ROW_DRAG",
    drop({ index }: { index: number }) {
      onRowReorder(index, rowIdx)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  className = clsx(className, {
    [css.rowDraggingClassname]: isDragging,
    [css.rowOverClassname]: isOver,
  })

  return (
    <Row
      ref={useCombinedRefs(drag, drop)}
      rowIdx={rowIdx}
      isRowSelected={isRowSelected}
      className={className}
      {...props}
    />
  )
}
