<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_data.proto

namespace Claros\Instrument;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.instrument.InstrumentData</code>
 */
class InstrumentData extends \Google\Protobuf\Internal\Message
{
    /**
     * In header
     *
     * Generated from protobuf field <code>string tenantId = 1;</code>
     */
    private $tenantId = '';
    /**
     * Generated from protobuf field <code>string fusionId = 2;</code>
     */
    private $fusionId = '';
    /**
     * Generated from protobuf field <code>.claros.instrument.InstrumentEvent events = 3;</code>
     */
    private $events = null;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.InstrumentMeasurement measurements = 4;</code>
     */
    private $measurements;
    /**
     * Generated from protobuf field <code>map<string, string> settings = 5;</code>
     */
    private $settings;
    /**
     * Generated from protobuf field <code>map<string, string> states = 6;</code>
     */
    private $states;
    /**
     * this is optionally set if all children share the same time
     *
     * Generated from protobuf field <code>.claros.common.DateTime instrumentDataDateTime = 7;</code>
     */
    private $instrumentDataDateTime = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $tenantId
     *           In header
     *     @type string $fusionId
     *     @type \Claros\Instrument\InstrumentEvent $events
     *     @type \Claros\Instrument\InstrumentMeasurement[]|\Google\Protobuf\Internal\RepeatedField $measurements
     *     @type array|\Google\Protobuf\Internal\MapField $settings
     *     @type array|\Google\Protobuf\Internal\MapField $states
     *     @type \Claros\Common\DateTime $instrumentDataDateTime
     *           this is optionally set if all children share the same time
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosInstrumentData::initOnce();
        parent::__construct($data);
    }

    /**
     * In header
     *
     * Generated from protobuf field <code>string tenantId = 1;</code>
     * @return string
     */
    public function getTenantId()
    {
        return $this->tenantId;
    }

    /**
     * In header
     *
     * Generated from protobuf field <code>string tenantId = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setTenantId($var)
    {
        GPBUtil::checkString($var, True);
        $this->tenantId = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>string fusionId = 2;</code>
     * @return string
     */
    public function getFusionId()
    {
        return $this->fusionId;
    }

    /**
     * Generated from protobuf field <code>string fusionId = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setFusionId($var)
    {
        GPBUtil::checkString($var, True);
        $this->fusionId = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.claros.instrument.InstrumentEvent events = 3;</code>
     * @return \Claros\Instrument\InstrumentEvent
     */
    public function getEvents()
    {
        return $this->events;
    }

    /**
     * Generated from protobuf field <code>.claros.instrument.InstrumentEvent events = 3;</code>
     * @param \Claros\Instrument\InstrumentEvent $var
     * @return $this
     */
    public function setEvents($var)
    {
        GPBUtil::checkMessage($var, \Claros\Instrument\InstrumentEvent::class);
        $this->events = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.InstrumentMeasurement measurements = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getMeasurements()
    {
        return $this->measurements;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.InstrumentMeasurement measurements = 4;</code>
     * @param \Claros\Instrument\InstrumentMeasurement[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setMeasurements($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\InstrumentMeasurement::class);
        $this->measurements = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> settings = 5;</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * Generated from protobuf field <code>map<string, string> settings = 5;</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setSettings($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->settings = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>map<string, string> states = 6;</code>
     * @return \Google\Protobuf\Internal\MapField
     */
    public function getStates()
    {
        return $this->states;
    }

    /**
     * Generated from protobuf field <code>map<string, string> states = 6;</code>
     * @param array|\Google\Protobuf\Internal\MapField $var
     * @return $this
     */
    public function setStates($var)
    {
        $arr = GPBUtil::checkMapField($var, \Google\Protobuf\Internal\GPBType::STRING, \Google\Protobuf\Internal\GPBType::STRING);
        $this->states = $arr;

        return $this;
    }

    /**
     * this is optionally set if all children share the same time
     *
     * Generated from protobuf field <code>.claros.common.DateTime instrumentDataDateTime = 7;</code>
     * @return \Claros\Common\DateTime
     */
    public function getInstrumentDataDateTime()
    {
        return $this->instrumentDataDateTime;
    }

    /**
     * this is optionally set if all children share the same time
     *
     * Generated from protobuf field <code>.claros.common.DateTime instrumentDataDateTime = 7;</code>
     * @param \Claros\Common\DateTime $var
     * @return $this
     */
    public function setInstrumentDataDateTime($var)
    {
        GPBUtil::checkMessage($var, \Claros\Common\DateTime::class);
        $this->instrumentDataDateTime = $var;

        return $this;
    }

}

