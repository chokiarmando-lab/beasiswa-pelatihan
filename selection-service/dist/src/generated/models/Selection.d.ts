import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type SelectionModel = runtime.Types.Result.DefaultSelection<Prisma.$SelectionPayload>;
export type AggregateSelection = {
    _count: SelectionCountAggregateOutputType | null;
    _avg: SelectionAvgAggregateOutputType | null;
    _sum: SelectionSumAggregateOutputType | null;
    _min: SelectionMinAggregateOutputType | null;
    _max: SelectionMaxAggregateOutputType | null;
};
export type SelectionAvgAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    institutionId: number | null;
    score: number | null;
};
export type SelectionSumAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    institutionId: number | null;
    score: number | null;
};
export type SelectionMinAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    institutionId: number | null;
    score: number | null;
    notes: string | null;
    status: $Enums.SelectionStatus | null;
    selectedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SelectionMaxAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    institutionId: number | null;
    score: number | null;
    notes: string | null;
    status: $Enums.SelectionStatus | null;
    selectedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SelectionCountAggregateOutputType = {
    id: number;
    applicationId: number;
    institutionId: number;
    score: number;
    notes: number;
    status: number;
    selectedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SelectionAvgAggregateInputType = {
    id?: true;
    applicationId?: true;
    institutionId?: true;
    score?: true;
};
export type SelectionSumAggregateInputType = {
    id?: true;
    applicationId?: true;
    institutionId?: true;
    score?: true;
};
export type SelectionMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    institutionId?: true;
    score?: true;
    notes?: true;
    status?: true;
    selectedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SelectionMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    institutionId?: true;
    score?: true;
    notes?: true;
    status?: true;
    selectedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SelectionCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    institutionId?: true;
    score?: true;
    notes?: true;
    status?: true;
    selectedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SelectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelectionWhereInput;
    orderBy?: Prisma.SelectionOrderByWithRelationInput | Prisma.SelectionOrderByWithRelationInput[];
    cursor?: Prisma.SelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SelectionCountAggregateInputType;
    _avg?: SelectionAvgAggregateInputType;
    _sum?: SelectionSumAggregateInputType;
    _min?: SelectionMinAggregateInputType;
    _max?: SelectionMaxAggregateInputType;
};
export type GetSelectionAggregateType<T extends SelectionAggregateArgs> = {
    [P in keyof T & keyof AggregateSelection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSelection[P]> : Prisma.GetScalarType<T[P], AggregateSelection[P]>;
};
export type SelectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelectionWhereInput;
    orderBy?: Prisma.SelectionOrderByWithAggregationInput | Prisma.SelectionOrderByWithAggregationInput[];
    by: Prisma.SelectionScalarFieldEnum[] | Prisma.SelectionScalarFieldEnum;
    having?: Prisma.SelectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SelectionCountAggregateInputType | true;
    _avg?: SelectionAvgAggregateInputType;
    _sum?: SelectionSumAggregateInputType;
    _min?: SelectionMinAggregateInputType;
    _max?: SelectionMaxAggregateInputType;
};
export type SelectionGroupByOutputType = {
    id: number;
    applicationId: number;
    institutionId: number | null;
    score: number | null;
    notes: string | null;
    status: $Enums.SelectionStatus;
    selectedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SelectionCountAggregateOutputType | null;
    _avg: SelectionAvgAggregateOutputType | null;
    _sum: SelectionSumAggregateOutputType | null;
    _min: SelectionMinAggregateOutputType | null;
    _max: SelectionMaxAggregateOutputType | null;
};
export type GetSelectionGroupByPayload<T extends SelectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SelectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SelectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SelectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SelectionGroupByOutputType[P]>;
}>>;
export type SelectionWhereInput = {
    AND?: Prisma.SelectionWhereInput | Prisma.SelectionWhereInput[];
    OR?: Prisma.SelectionWhereInput[];
    NOT?: Prisma.SelectionWhereInput | Prisma.SelectionWhereInput[];
    id?: Prisma.IntFilter<"Selection"> | number;
    applicationId?: Prisma.IntFilter<"Selection"> | number;
    institutionId?: Prisma.IntNullableFilter<"Selection"> | number | null;
    score?: Prisma.FloatNullableFilter<"Selection"> | number | null;
    notes?: Prisma.StringNullableFilter<"Selection"> | string | null;
    status?: Prisma.EnumSelectionStatusFilter<"Selection"> | $Enums.SelectionStatus;
    selectedAt?: Prisma.DateTimeNullableFilter<"Selection"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Selection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Selection"> | Date | string;
};
export type SelectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    selectedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.SelectionOrderByRelevanceInput;
};
export type SelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    applicationId?: number;
    AND?: Prisma.SelectionWhereInput | Prisma.SelectionWhereInput[];
    OR?: Prisma.SelectionWhereInput[];
    NOT?: Prisma.SelectionWhereInput | Prisma.SelectionWhereInput[];
    institutionId?: Prisma.IntNullableFilter<"Selection"> | number | null;
    score?: Prisma.FloatNullableFilter<"Selection"> | number | null;
    notes?: Prisma.StringNullableFilter<"Selection"> | string | null;
    status?: Prisma.EnumSelectionStatusFilter<"Selection"> | $Enums.SelectionStatus;
    selectedAt?: Prisma.DateTimeNullableFilter<"Selection"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Selection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Selection"> | Date | string;
}, "id" | "applicationId">;
export type SelectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    selectedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SelectionCountOrderByAggregateInput;
    _avg?: Prisma.SelectionAvgOrderByAggregateInput;
    _max?: Prisma.SelectionMaxOrderByAggregateInput;
    _min?: Prisma.SelectionMinOrderByAggregateInput;
    _sum?: Prisma.SelectionSumOrderByAggregateInput;
};
export type SelectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SelectionScalarWhereWithAggregatesInput | Prisma.SelectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SelectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SelectionScalarWhereWithAggregatesInput | Prisma.SelectionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Selection"> | number;
    applicationId?: Prisma.IntWithAggregatesFilter<"Selection"> | number;
    institutionId?: Prisma.IntNullableWithAggregatesFilter<"Selection"> | number | null;
    score?: Prisma.FloatNullableWithAggregatesFilter<"Selection"> | number | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Selection"> | string | null;
    status?: Prisma.EnumSelectionStatusWithAggregatesFilter<"Selection"> | $Enums.SelectionStatus;
    selectedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Selection"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Selection"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Selection"> | Date | string;
};
export type SelectionCreateInput = {
    applicationId: number;
    institutionId?: number | null;
    score?: number | null;
    notes?: string | null;
    status?: $Enums.SelectionStatus;
    selectedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SelectionUncheckedCreateInput = {
    id?: number;
    applicationId: number;
    institutionId?: number | null;
    score?: number | null;
    notes?: string | null;
    status?: $Enums.SelectionStatus;
    selectedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SelectionUpdateInput = {
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    institutionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumSelectionStatusFieldUpdateOperationsInput | $Enums.SelectionStatus;
    selectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelectionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    institutionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumSelectionStatusFieldUpdateOperationsInput | $Enums.SelectionStatus;
    selectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelectionCreateManyInput = {
    id?: number;
    applicationId: number;
    institutionId?: number | null;
    score?: number | null;
    notes?: string | null;
    status?: $Enums.SelectionStatus;
    selectedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SelectionUpdateManyMutationInput = {
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    institutionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumSelectionStatusFieldUpdateOperationsInput | $Enums.SelectionStatus;
    selectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelectionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    institutionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumSelectionStatusFieldUpdateOperationsInput | $Enums.SelectionStatus;
    selectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelectionOrderByRelevanceInput = {
    fields: Prisma.SelectionOrderByRelevanceFieldEnum | Prisma.SelectionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SelectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    selectedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SelectionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type SelectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    selectedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SelectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    selectedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SelectionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumSelectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SelectionStatus;
};
export type SelectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    institutionId?: boolean;
    score?: boolean;
    notes?: boolean;
    status?: boolean;
    selectedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["selection"]>;
export type SelectionSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    institutionId?: boolean;
    score?: boolean;
    notes?: boolean;
    status?: boolean;
    selectedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SelectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "institutionId" | "score" | "notes" | "status" | "selectedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["selection"]>;
export type $SelectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Selection";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        applicationId: number;
        institutionId: number | null;
        score: number | null;
        notes: string | null;
        status: $Enums.SelectionStatus;
        selectedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["selection"]>;
    composites: {};
};
export type SelectionGetPayload<S extends boolean | null | undefined | SelectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SelectionPayload, S>;
export type SelectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SelectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SelectionCountAggregateInputType | true;
};
export interface SelectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Selection'];
        meta: {
            name: 'Selection';
        };
    };
    findUnique<T extends SelectionFindUniqueArgs>(args: Prisma.SelectSubset<T, SelectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SelectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SelectionFindFirstArgs>(args?: Prisma.SelectSubset<T, SelectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SelectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SelectionFindManyArgs>(args?: Prisma.SelectSubset<T, SelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SelectionCreateArgs>(args: Prisma.SelectSubset<T, SelectionCreateArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SelectionCreateManyArgs>(args?: Prisma.SelectSubset<T, SelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SelectionDeleteArgs>(args: Prisma.SelectSubset<T, SelectionDeleteArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SelectionUpdateArgs>(args: Prisma.SelectSubset<T, SelectionUpdateArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SelectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SelectionUpdateManyArgs>(args: Prisma.SelectSubset<T, SelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SelectionUpsertArgs>(args: Prisma.SelectSubset<T, SelectionUpsertArgs<ExtArgs>>): Prisma.Prisma__SelectionClient<runtime.Types.Result.GetResult<Prisma.$SelectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SelectionCountArgs>(args?: Prisma.Subset<T, SelectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SelectionCountAggregateOutputType> : number>;
    aggregate<T extends SelectionAggregateArgs>(args: Prisma.Subset<T, SelectionAggregateArgs>): Prisma.PrismaPromise<GetSelectionAggregateType<T>>;
    groupBy<T extends SelectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SelectionGroupByArgs['orderBy'];
    } : {
        orderBy?: SelectionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SelectionFieldRefs;
}
export interface Prisma__SelectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SelectionFieldRefs {
    readonly id: Prisma.FieldRef<"Selection", 'Int'>;
    readonly applicationId: Prisma.FieldRef<"Selection", 'Int'>;
    readonly institutionId: Prisma.FieldRef<"Selection", 'Int'>;
    readonly score: Prisma.FieldRef<"Selection", 'Float'>;
    readonly notes: Prisma.FieldRef<"Selection", 'String'>;
    readonly status: Prisma.FieldRef<"Selection", 'SelectionStatus'>;
    readonly selectedAt: Prisma.FieldRef<"Selection", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Selection", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Selection", 'DateTime'>;
}
export type SelectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where: Prisma.SelectionWhereUniqueInput;
};
export type SelectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where: Prisma.SelectionWhereUniqueInput;
};
export type SelectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where?: Prisma.SelectionWhereInput;
    orderBy?: Prisma.SelectionOrderByWithRelationInput | Prisma.SelectionOrderByWithRelationInput[];
    cursor?: Prisma.SelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelectionScalarFieldEnum | Prisma.SelectionScalarFieldEnum[];
};
export type SelectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where?: Prisma.SelectionWhereInput;
    orderBy?: Prisma.SelectionOrderByWithRelationInput | Prisma.SelectionOrderByWithRelationInput[];
    cursor?: Prisma.SelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelectionScalarFieldEnum | Prisma.SelectionScalarFieldEnum[];
};
export type SelectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where?: Prisma.SelectionWhereInput;
    orderBy?: Prisma.SelectionOrderByWithRelationInput | Prisma.SelectionOrderByWithRelationInput[];
    cursor?: Prisma.SelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelectionScalarFieldEnum | Prisma.SelectionScalarFieldEnum[];
};
export type SelectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SelectionCreateInput, Prisma.SelectionUncheckedCreateInput>;
};
export type SelectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SelectionCreateManyInput | Prisma.SelectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SelectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SelectionUpdateInput, Prisma.SelectionUncheckedUpdateInput>;
    where: Prisma.SelectionWhereUniqueInput;
};
export type SelectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SelectionUpdateManyMutationInput, Prisma.SelectionUncheckedUpdateManyInput>;
    where?: Prisma.SelectionWhereInput;
    limit?: number;
};
export type SelectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where: Prisma.SelectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelectionCreateInput, Prisma.SelectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SelectionUpdateInput, Prisma.SelectionUncheckedUpdateInput>;
};
export type SelectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
    where: Prisma.SelectionWhereUniqueInput;
};
export type SelectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelectionWhereInput;
    limit?: number;
};
export type SelectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelectionSelect<ExtArgs> | null;
    omit?: Prisma.SelectionOmit<ExtArgs> | null;
};
