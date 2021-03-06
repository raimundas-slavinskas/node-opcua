export declare interface StatusCode {
    name: string;
    value: number,
    description: string
}

export declare interface StatusCodes {
    Good: StatusCode
    BadUnexpectedError: StatusCode
    BadInternalError: StatusCode
    BadOutOfMemory: StatusCode
    BadResourceUnavailable: StatusCode
    BadCommunicationError: StatusCode
    BadEncodingError: StatusCode
    BadDecodingError: StatusCode
    BadEncodingLimitsExceeded: StatusCode
    BadRequestTooLarge: StatusCode
    BadResponseTooLarge: StatusCode
    BadUnknownResponse: StatusCode
    BadTimeout: StatusCode
    BadServiceUnsupported: StatusCode
    BadShutdown: StatusCode
    BadServerNotConnected: StatusCode
    BadServerHalted: StatusCode
    BadNothingToDo: StatusCode
    BadTooManyOperations: StatusCode
    BadTooManyMonitoredItems: StatusCode
    BadDataTypeIdUnknown: StatusCode
    BadCertificateInvalid: StatusCode
    BadSecurityChecksFailed: StatusCode
    BadCertificateTimeInvalid: StatusCode
    BadCertificateIssuerTimeInvalid: StatusCode
    BadCertificateHostNameInvalid: StatusCode
    BadCertificateUriInvalid: StatusCode
    BadCertificateUseNotAllowed: StatusCode
    BadCertificateIssuerUseNotAllowed: StatusCode
    BadCertificateUntrusted: StatusCode
    BadCertificateRevocationUnknown: StatusCode
    BadCertificateIssuerRevocationUnknown: StatusCode
    BadCertificateRevoked: StatusCode
    BadCertificateIssuerRevoked: StatusCode
    BadUserAccessDenied: StatusCode
    BadIdentityTokenInvalid: StatusCode
    BadIdentityTokenRejected: StatusCode
    BadSecureChannelIdInvalid: StatusCode
    BadInvalidTimestamp: StatusCode
    BadNonceInvalid: StatusCode
    BadSessionIdInvalid: StatusCode
    BadSessionClosed: StatusCode
    BadSessionNotActivated: StatusCode
    BadSubscriptionIdInvalid: StatusCode
    BadRequestHeaderInvalid: StatusCode
    BadTimestampsToReturnInvalid: StatusCode
    BadRequestCancelledByClient: StatusCode
    GoodSubscriptionTransferred: StatusCode
    GoodCompletesAsynchronously: StatusCode
    GoodOverload: StatusCode
    GoodClamped: StatusCode
    BadNoCommunication: StatusCode
    BadWaitingForInitialData: StatusCode
    BadNodeIdInvalid: StatusCode
    BadNodeIdUnknown: StatusCode
    BadAttributeIdInvalid: StatusCode
    BadIndexRangeInvalid: StatusCode
    BadIndexRangeNoData: StatusCode
    BadDataEncodingInvalid: StatusCode
    BadDataEncodingUnsupported: StatusCode
    BadNotReadable: StatusCode
    BadNotWritable: StatusCode
    BadOutOfRange: StatusCode
    BadNotSupported: StatusCode
    BadNotFound: StatusCode
    BadObjectDeleted: StatusCode
    BadNotImplemented: StatusCode
    BadMonitoringModeInvalid: StatusCode
    BadMonitoredItemIdInvalid: StatusCode
    BadMonitoredItemFilterInvalid: StatusCode
    BadMonitoredItemFilterUnsupported: StatusCode
    BadFilterNotAllowed: StatusCode
    BadStructureMissing: StatusCode
    BadEventFilterInvalid: StatusCode
    BadContentFilterInvalid: StatusCode
    BadFilterOperatorInvalid: StatusCode
    BadFilterOperatorUnsupported: StatusCode
    BadFilterOperandCountMismatch: StatusCode
    BadFilterOperandInvalid: StatusCode
    BadFilterElementInvalid: StatusCode
    BadFilterLiteralInvalid: StatusCode
    BadContinuationPointInvalid: StatusCode
    BadNoContinuationPoints: StatusCode
    BadReferenceTypeIdInvalid: StatusCode
    BadBrowseDirectionInvalid: StatusCode
    BadNodeNotInView: StatusCode
    BadServerUriInvalid: StatusCode
    BadServerNameMissing: StatusCode
    BadDiscoveryUrlMissing: StatusCode
    BadSempahoreFileMissing: StatusCode
    BadRequestTypeInvalid: StatusCode
    BadSecurityModeRejected: StatusCode
    BadSecurityPolicyRejected: StatusCode
    BadTooManySessions: StatusCode
    BadUserSignatureInvalid: StatusCode
    BadApplicationSignatureInvalid: StatusCode
    BadNoValidCertificates: StatusCode
    BadIdentityChangeNotSupported: StatusCode
    BadRequestCancelledByRequest: StatusCode
    BadParentNodeIdInvalid: StatusCode
    BadReferenceNotAllowed: StatusCode
    BadNodeIdRejected: StatusCode
    BadNodeIdExists: StatusCode
    BadNodeClassInvalid: StatusCode
    BadBrowseNameInvalid: StatusCode
    BadBrowseNameDuplicated: StatusCode
    BadNodeAttributesInvalid: StatusCode
    BadTypeDefinitionInvalid: StatusCode
    BadSourceNodeIdInvalid: StatusCode
    BadTargetNodeIdInvalid: StatusCode
    BadDuplicateReferenceNotAllowed: StatusCode
    BadInvalidSelfReference: StatusCode
    BadReferenceLocalOnly: StatusCode
    BadNoDeleteRights: StatusCode
    UncertainReferenceNotDeleted: StatusCode
    BadServerIndexInvalid: StatusCode
    BadViewIdUnknown: StatusCode
    BadViewTimestampInvalid: StatusCode
    BadViewParameterMismatch: StatusCode
    BadViewVersionInvalid: StatusCode
    UncertainNotAllNodesAvailable: StatusCode
    GoodResultsMayBeIncomplete: StatusCode
    BadNotTypeDefinition: StatusCode
    UncertainReferenceOutOfServer: StatusCode
    BadTooManyMatches: StatusCode
    BadQueryTooComplex: StatusCode
    BadNoMatch: StatusCode
    BadMaxAgeInvalid: StatusCode
    BadHistoryOperationInvalid: StatusCode
    BadHistoryOperationUnsupported: StatusCode
    BadInvalidTimestampArgument: StatusCode
    BadWriteNotSupported: StatusCode
    BadTypeMismatch: StatusCode
    BadMethodInvalid: StatusCode
    BadArgumentsMissing: StatusCode
    BadTooManySubscriptions: StatusCode
    BadTooManyPublishRequests: StatusCode
    BadNoSubscription: StatusCode
    BadSequenceNumberUnknown: StatusCode
    BadMessageNotAvailable: StatusCode
    BadInsufficientClientProfile: StatusCode
    BadStateNotActive: StatusCode
    BadTcpServerTooBusy: StatusCode
    BadTcpMessageTypeInvalid: StatusCode
    BadTcpSecureChannelUnknown: StatusCode
    BadTcpMessageTooLarge: StatusCode
    BadTcpNotEnoughResources: StatusCode
    BadTcpInternalError: StatusCode
    BadTcpEndpointUrlInvalid: StatusCode
    BadRequestInterrupted: StatusCode
    BadRequestTimeout: StatusCode
    BadSecureChannelClosed: StatusCode
    BadSecureChannelTokenUnknown: StatusCode
    BadSequenceNumberInvalid: StatusCode
    BadProtocolVersionUnsupported: StatusCode
    BadConfigurationError: StatusCode
    BadNotConnected: StatusCode
    BadDeviceFailure: StatusCode
    BadSensorFailure: StatusCode
    BadOutOfService: StatusCode
    BadDeadbandFilterInvalid: StatusCode
    UncertainNoCommunicationLastUsableValue: StatusCode
    UncertainLastUsableValue: StatusCode
    UncertainSubstituteValue: StatusCode
    UncertainInitialValue: StatusCode
    UncertainSensorNotAccurate: StatusCode
    UncertainEngineeringUnitsExceeded: StatusCode
    UncertainSubNormal: StatusCode
    GoodLocalOverride: StatusCode
    BadRefreshInProgress: StatusCode
    BadConditionAlreadyDisabled: StatusCode
    BadConditionAlreadyEnabled: StatusCode
    BadConditionDisabled: StatusCode
    BadEventIdUnknown: StatusCode
    BadEventNotAcknowledgeable: StatusCode
    BadDialogNotActive: StatusCode
    BadDialogResponseInvalid: StatusCode
    BadConditionBranchAlreadyAcked: StatusCode
    BadConditionBranchAlreadyConfirmed: StatusCode
    BadConditionAlreadyShelved: StatusCode
    BadConditionNotShelved: StatusCode
    BadShelvingTimeOutOfRange: StatusCode
    BadNoData: StatusCode
    BadBoundNotFound: StatusCode
    BadBoundNotSupported: StatusCode
    BadDataLost: StatusCode
    BadDataUnavailable: StatusCode
    BadEntryExists: StatusCode
    BadNoEntryExists: StatusCode
    BadTimestampNotSupported: StatusCode
    GoodEntryInserted: StatusCode
    GoodEntryReplaced: StatusCode
    UncertainDataSubNormal: StatusCode
    GoodNoData: StatusCode
    GoodMoreData: StatusCode
    BadAggregateListMismatch: StatusCode
    BadAggregateNotSupported: StatusCode
    BadAggregateInvalidInputs: StatusCode
    BadAggregateConfigurationRejected: StatusCode
    GoodDataIgnored: StatusCode
    GoodCommunicationEvent: StatusCode
    GoodShutdownEvent: StatusCode
    GoodCallAgain: StatusCode
    GoodNonCriticalTimeout: StatusCode
    BadInvalidArgument: StatusCode
    BadConnectionRejected: StatusCode
    BadDisconnect: StatusCode
    BadConnectionClosed: StatusCode
    BadInvalidState: StatusCode
    BadEndOfStream: StatusCode
    BadNoDataAvailable: StatusCode
    BadWaitingForResponse: StatusCode
    BadOperationAbandoned: StatusCode
    BadExpectedStreamToBlock: StatusCode
    BadWouldBlock: StatusCode
    BadSyntaxError: StatusCode
    BadMaxConnectionsReached: StatusCode
}