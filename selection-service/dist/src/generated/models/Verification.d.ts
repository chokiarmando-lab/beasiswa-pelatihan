import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
export type VerificationModel = runtime.Types.Result.DefaultSelection<Prisma.$VerificationPayload>;
export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null;
    _avg: VerificationAvgAggregateOutputType | null;
    _sum: VerificationSumAggregateOutputType | null;
    _min: VerificationMinAggregateOutputType | null;
    _max: VerificationMaxAggregateOutputType | null;
};
export type VerificationAvgAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    verifiedBy: number | null;
};
export type VerificationSumAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    verifiedBy: number | null;
};
export type VerificationMinAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    status: $Enums.VerificationStatus | null;
    notes: string | null;
    verifiedBy: number | null;
    verifiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VerificationMaxAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    status: $Enums.VerificationStatus | null;
    notes: string | null;
    verifiedBy: number | null;
    verifiedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VerificationCountAggregateOutputType = {
    id: number;
    applicationId: number;
    status: number;
    notes: number;
    verifiedBy: number;
    verifiedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VerificationAvgAggregateInputType = {
    id?: true;
    applicationId?: true;
    verifiedBy?: true;
};
export type VerificationSumAggregateInputType = {
    id?: true;
    applicationId?: true;
    verifiedBy?: true;
};
export type VerificationMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    status?: true;
    notes?: true;
    verifiedBy?: true;
    verifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VerificationMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    status?: true;
    notes?: true;
    verifiedBy?: true;
    verifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VerificationCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    status?: true;
    notes?: true;
    verifiedBy?: true;
    verifiedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VerificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithRelationInput | Prisma.VerificationOrderByWithRelationInput[];
    cursor?: Prisma.VerificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VerificationCountAggregateInputType;
    _avg?: VerificationAvgAggregateInputType;
    _sum?: VerificationSumAggregateInputType;
    _min?: VerificationMinAggregateInputType;
    _max?: VerificationMaxAggregateInputType;
};
export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
    [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVerification[P]> : Prisma.GetScalarType<T[P], AggregateVerification[P]>;
};
export type VerificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithAggregationInput | Prisma.VerificationOrderByWithAggregationInput[];
    by: Prisma.VerificationScalarFieldEnum[] | Prisma.VerificationScalarFieldEnum;
    having?: Prisma.VerificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VerificationCountAggregateInputType | true;
    _avg?: VerificationAvgAggregateInputType;
    _sum?: VerificationSumAggregateInputType;
    _min?: VerificationMinAggregateInputType;
    _max?: VerificationMaxAggregateInputType;
};
export type VerificationGroupByOutputType = {
    id: number;
    applicationId: number;
    status: $Enums.VerificationStatus;
    notes: string | null;
    verifiedBy: number | null;
    verifiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: VerificationCountAggregateOutputType | null;
    _avg: VerificationAvgAggregateOutputType | null;
    _sum: VerificationSumAggregateOutputType | null;
    _min: VerificationMinAggregateOutputType | null;
    _max: VerificationMaxAggregateOutputType | null;
};
export type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VerificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VerificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VerificationGroupByOutputType[P]>;
}>>;
export type VerificationWhereInput = {
    AND?: Prisma.VerificationWhereInput | Prisma.VerificationWhereInput[];
    OR?: Prisma.VerificationWhereInput[];
    NOT?: Prisma.VerificationWhereInput | Prisma.VerificationWhereInput[];
    id?: Prisma.IntFilter<"Verification"> | number;
    applicationId?: Prisma.IntFilter<"Verification"> | number;
    status?: Prisma.EnumVerificationStatusFilter<"Verification"> | $Enums.VerificationStatus;
    notes?: Prisma.StringNullableFilter<"Verification"> | string | null;
    verifiedBy?: Prisma.IntNullableFilter<"Verification"> | number | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"Verification"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Verification"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Verification"> | Date | string;
};
export type VerificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.VerificationOrderByRelevanceInput;
};
export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    applicationId?: number;
    AND?: Prisma.VerificationWhereInput | Prisma.VerificationWhereInput[];
    OR?: Prisma.VerificationWhereInput[];
    NOT?: Prisma.VerificationWhereInput | Prisma.VerificationWhereInput[];
    status?: Prisma.EnumVerificationStatusFilter<"Verification"> | $Enums.VerificationStatus;
    notes?: Prisma.StringNullableFilter<"Verification"> | string | null;
    verifiedBy?: Prisma.IntNullableFilter<"Verification"> | number | null;
    verifiedAt?: Prisma.DateTimeNullableFilter<"Verification"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Verification"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Verification"> | Date | string;
}, "id" | "applicationId">;
export type VerificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VerificationCountOrderByAggregateInput;
    _avg?: Prisma.VerificationAvgOrderByAggregateInput;
    _max?: Prisma.VerificationMaxOrderByAggregateInput;
    _min?: Prisma.VerificationMinOrderByAggregateInput;
    _sum?: Prisma.VerificationSumOrderByAggregateInput;
};
export type VerificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.VerificationScalarWhereWithAggregatesInput | Prisma.VerificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.VerificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VerificationScalarWhereWithAggregatesInput | Prisma.VerificationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Verification"> | number;
    applicationId?: Prisma.IntWithAggregatesFilter<"Verification"> | number;
    status?: Prisma.EnumVerificationStatusWithAggregatesFilter<"Verification"> | $Enums.VerificationStatus;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Verification"> | string | null;
    verifiedBy?: Prisma.IntNullableWithAggregatesFilter<"Verification"> | number | null;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Verification"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Verification"> | Date | string;
};
export type VerificationCreateInput = {
    applicationId: number;
    status?: $Enums.VerificationStatus;
    notes?: string | null;
    verifiedBy?: number | null;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationUncheckedCreateInput = {
    id?: number;
    applicationId: number;
    status?: $Enums.VerificationStatus;
    notes?: string | null;
    verifiedBy?: number | null;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationUpdateInput = {
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedBy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedBy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationCreateManyInput = {
    id?: number;
    applicationId: number;
    status?: $Enums.VerificationStatus;
    notes?: string | null;
    verifiedBy?: number | null;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VerificationUpdateManyMutationInput = {
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedBy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verifiedBy?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VerificationOrderByRelevanceInput = {
    fields: Prisma.VerificationOrderByRelevanceFieldEnum | Prisma.VerificationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type VerificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
};
export type VerificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VerificationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    verifiedBy?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type VerificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    status?: boolean;
    notes?: boolean;
    verifiedBy?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["verification"]>;
export type VerificationSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    status?: boolean;
    notes?: boolean;
    verifiedBy?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VerificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "status" | "notes" | "verifiedBy" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>;
export type $VerificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Verification";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        applicationId: number;
        status: $Enums.VerificationStatus;
        notes: string | null;
        verifiedBy: number | null;
        verifiedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["verification"]>;
    composites: {};
};
export type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VerificationPayload, S>;
export type VerificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VerificationCountAggregateInputType | true;
};
export interface VerificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Verification'];
        meta: {
            name: 'Verification';
        };
    };
    findUnique<T extends VerificationFindUniqueArgs>(args: Prisma.SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VerificationFindFirstArgs>(args?: Prisma.SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VerificationFindManyArgs>(args?: Prisma.SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VerificationCreateArgs>(args: Prisma.SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VerificationCreateManyArgs>(args?: Prisma.SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends VerificationDeleteArgs>(args: Prisma.SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VerificationUpdateArgs>(args: Prisma.SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VerificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VerificationUpdateManyArgs>(args: Prisma.SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends VerificationUpsertArgs>(args: Prisma.SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma.Prisma__VerificationClient<runtime.Types.Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VerificationCountArgs>(args?: Prisma.Subset<T, VerificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VerificationCountAggregateOutputType> : number>;
    aggregate<T extends VerificationAggregateArgs>(args: Prisma.Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>;
    groupBy<T extends VerificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VerificationGroupByArgs['orderBy'];
    } : {
        orderBy?: VerificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VerificationFieldRefs;
}
export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VerificationFieldRefs {
    readonly id: Prisma.FieldRef<"Verification", 'Int'>;
    readonly applicationId: Prisma.FieldRef<"Verification", 'Int'>;
    readonly status: Prisma.FieldRef<"Verification", 'VerificationStatus'>;
    readonly notes: Prisma.FieldRef<"Verification", 'String'>;
    readonly verifiedBy: Prisma.FieldRef<"Verification", 'Int'>;
    readonly verifiedAt: Prisma.FieldRef<"Verification", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Verification", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Verification", 'DateTime'>;
}
export type VerificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where: Prisma.VerificationWhereUniqueInput;
};
export type VerificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where: Prisma.VerificationWhereUniqueInput;
};
export type VerificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithRelationInput | Prisma.VerificationOrderByWithRelationInput[];
    cursor?: Prisma.VerificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VerificationScalarFieldEnum | Prisma.VerificationScalarFieldEnum[];
};
export type VerificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithRelationInput | Prisma.VerificationOrderByWithRelationInput[];
    cursor?: Prisma.VerificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VerificationScalarFieldEnum | Prisma.VerificationScalarFieldEnum[];
};
export type VerificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithRelationInput | Prisma.VerificationOrderByWithRelationInput[];
    cursor?: Prisma.VerificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VerificationScalarFieldEnum | Prisma.VerificationScalarFieldEnum[];
};
export type VerificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VerificationCreateInput, Prisma.VerificationUncheckedCreateInput>;
};
export type VerificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VerificationCreateManyInput | Prisma.VerificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VerificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VerificationUpdateInput, Prisma.VerificationUncheckedUpdateInput>;
    where: Prisma.VerificationWhereUniqueInput;
};
export type VerificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VerificationUpdateManyMutationInput, Prisma.VerificationUncheckedUpdateManyInput>;
    where?: Prisma.VerificationWhereInput;
    limit?: number;
};
export type VerificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where: Prisma.VerificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.VerificationCreateInput, Prisma.VerificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VerificationUpdateInput, Prisma.VerificationUncheckedUpdateInput>;
};
export type VerificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
    where: Prisma.VerificationWhereUniqueInput;
};
export type VerificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VerificationWhereInput;
    limit?: number;
};
export type VerificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VerificationSelect<ExtArgs> | null;
    omit?: Prisma.VerificationOmit<ExtArgs> | null;
};
