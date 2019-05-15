<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_event.proto

namespace Claros\Instrument;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.instrument.InstrumentEvent</code>
 */
class InstrumentEvent extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.Calibration calibrations = 1;</code>
     */
    private $calibrations;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData errors = 2;</code>
     */
    private $errors;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData info = 3;</code>
     */
    private $info;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData limits = 4;</code>
     */
    private $limits;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData reminders = 5;</code>
     */
    private $reminders;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData warnings = 6;</code>
     */
    private $warnings;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.PrognosysData prognosys = 7;</code>
     */
    private $prognosys;
    /**
     * Generated from protobuf field <code>.claros.common.DateTime eventDateTime = 8;</code>
     */
    private $eventDateTime = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Claros\Instrument\Calibration[]|\Google\Protobuf\Internal\RepeatedField $calibrations
     *     @type \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $errors
     *     @type \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $info
     *     @type \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $limits
     *     @type \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $reminders
     *     @type \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $warnings
     *     @type \Claros\Instrument\PrognosysData[]|\Google\Protobuf\Internal\RepeatedField $prognosys
     *     @type \Claros\Common\DateTime $eventDateTime
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosInstrumentEvent::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.Calibration calibrations = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCalibrations()
    {
        return $this->calibrations;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.Calibration calibrations = 1;</code>
     * @param \Claros\Instrument\Calibration[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCalibrations($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\Calibration::class);
        $this->calibrations = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData errors = 2;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getErrors()
    {
        return $this->errors;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData errors = 2;</code>
     * @param \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setErrors($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\EventMetaData::class);
        $this->errors = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData info = 3;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getInfo()
    {
        return $this->info;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData info = 3;</code>
     * @param \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setInfo($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\EventMetaData::class);
        $this->info = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData limits = 4;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getLimits()
    {
        return $this->limits;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData limits = 4;</code>
     * @param \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setLimits($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\EventMetaData::class);
        $this->limits = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData reminders = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getReminders()
    {
        return $this->reminders;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData reminders = 5;</code>
     * @param \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setReminders($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\EventMetaData::class);
        $this->reminders = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData warnings = 6;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getWarnings()
    {
        return $this->warnings;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.EventMetaData warnings = 6;</code>
     * @param \Claros\Instrument\EventMetaData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setWarnings($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\EventMetaData::class);
        $this->warnings = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.PrognosysData prognosys = 7;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getPrognosys()
    {
        return $this->prognosys;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.PrognosysData prognosys = 7;</code>
     * @param \Claros\Instrument\PrognosysData[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setPrognosys($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\PrognosysData::class);
        $this->prognosys = $arr;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.claros.common.DateTime eventDateTime = 8;</code>
     * @return \Claros\Common\DateTime
     */
    public function getEventDateTime()
    {
        return $this->eventDateTime;
    }

    /**
     * Generated from protobuf field <code>.claros.common.DateTime eventDateTime = 8;</code>
     * @param \Claros\Common\DateTime $var
     * @return $this
     */
    public function setEventDateTime($var)
    {
        GPBUtil::checkMessage($var, \Claros\Common\DateTime::class);
        $this->eventDateTime = $var;

        return $this;
    }

}

