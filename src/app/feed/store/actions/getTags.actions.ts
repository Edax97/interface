import { ActionTypes } from '../action-types'
import { createAction, props } from '@ngrx/store'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'
import { TagsInterface } from '../../types/tags.interface'

export const getTagsAction = createAction(ActionTypes.GET_TAG)

export const getTagsSuccessAction = createAction(
    ActionTypes.GET_TAG_SUCCESS,
    props<{ tags: TagsInterface }>()
)

export const getTagsFailureAction = createAction(
    ActionTypes.GET_TAG_FAILURE,
    props<{ errors: BackendErrorsInterface }>()
)
