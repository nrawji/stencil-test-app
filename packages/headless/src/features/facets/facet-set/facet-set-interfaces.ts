import {
  BaseFacetRequest,
  CurrentValues,
  Freezable,
  Delimitable,
  Type,
  SortCriteria,
} from '../facet-api/request';
import {BaseFacetResponse} from '../facet-api/response';

type FacetValueState = 'idle' | 'selected';
type FacetSortCriteria = 'score' | 'alphanumeric';

interface FacetValueRequest {
  value: string;
  state: FacetValueState;
  preventAutoSelect: boolean;
}

export interface FacetValue {
  value: string;
  state: FacetValueState;
  numberOfResults: number;
}

export interface FacetRequest
  extends BaseFacetRequest,
    CurrentValues<FacetValueRequest>,
    Freezable,
    Delimitable,
    Type<'specific'>,
    SortCriteria<FacetSortCriteria> {}

export type FacetResponse = BaseFacetResponse<FacetValue>;