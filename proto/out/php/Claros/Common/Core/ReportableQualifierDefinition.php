<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_reportablequalifierdefinition.proto

namespace Claros\Common\Core;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.common.core.ReportableQualifierDefinition</code>
 */
class ReportableQualifierDefinition extends \Google\Protobuf\Internal\Message
{
    /**
     * The type of reportable qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     */
    private $reportableQualifierType = 0;
    /**
     * How to interpret the qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     */
    private $reportableQualifierDefinitionType = 0;
    /**
     * The value if the interpretation is a constant
     *
     * Generated from protobuf field <code>double constantValue = 3;</code>
     */
    private $constantValue = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $reportableQualifierType
     *           The type of reportable qualifer
     *     @type int $reportableQualifierDefinitionType
     *           How to interpret the qualifer
     *     @type float $constantValue
     *           The value if the interpretation is a constant
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosCommonCoreReportablequalifierdefinition::initOnce();
        parent::__construct($data);
    }

    /**
     * The type of reportable qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     * @return int
     */
    public function getReportableQualifierType()
    {
        return $this->reportableQualifierType;
    }

    /**
     * The type of reportable qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setReportableQualifierType($var)
    {
        GPBUtil::checkEnum($var, \Claros\Common\Core\ReportableQualifierType::class);
        $this->reportableQualifierType = $var;

        return $this;
    }

    /**
     * How to interpret the qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     * @return int
     */
    public function getReportableQualifierDefinitionType()
    {
        return $this->reportableQualifierDefinitionType;
    }

    /**
     * How to interpret the qualifer
     *
     * Generated from protobuf field <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setReportableQualifierDefinitionType($var)
    {
        GPBUtil::checkEnum($var, \Claros\Common\Core\ReportableQualifierDefinitionType::class);
        $this->reportableQualifierDefinitionType = $var;

        return $this;
    }

    /**
     * The value if the interpretation is a constant
     *
     * Generated from protobuf field <code>double constantValue = 3;</code>
     * @return float
     */
    public function getConstantValue()
    {
        return $this->constantValue;
    }

    /**
     * The value if the interpretation is a constant
     *
     * Generated from protobuf field <code>double constantValue = 3;</code>
     * @param float $var
     * @return $this
     */
    public function setConstantValue($var)
    {
        GPBUtil::checkDouble($var);
        $this->constantValue = $var;

        return $this;
    }

}

