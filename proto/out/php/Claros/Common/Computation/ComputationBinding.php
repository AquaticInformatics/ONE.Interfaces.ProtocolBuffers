<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_computation_binding.proto

namespace Claros\Common\Computation;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.common.computation.ComputationBinding</code>
 */
class ComputationBinding extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string computationId = 1;</code>
     */
    private $computationId = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $computationId
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosCommonComputationBinding::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string computationId = 1;</code>
     * @return string
     */
    public function getComputationId()
    {
        return $this->computationId;
    }

    /**
     * Generated from protobuf field <code>string computationId = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setComputationId($var)
    {
        GPBUtil::checkString($var, True);
        $this->computationId = $var;

        return $this;
    }

}

