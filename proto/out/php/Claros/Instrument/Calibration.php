<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_calibration.proto

namespace Claros\Instrument;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>claros.instrument.Calibration</code>
 */
class Calibration extends \Google\Protobuf\Internal\Message
{
    /**
     * unique identifier of the calibration.  Could be a hash.
     *
     * Generated from protobuf field <code>string ID = 1;</code>
     */
    private $ID = '';
    /**
     * User who performed the calibration
     *
     * Generated from protobuf field <code>string userID = 2;</code>
     */
    private $userID = '';
    /**
     * Calibration Time
     *
     * Generated from protobuf field <code>uint64 time = 3;</code>
     */
    private $time = 0;
    /**
     * Status enumeration specific to the device
     *
     * Generated from protobuf field <code>uint32 status = 4;</code>
     */
    private $status = 0;
    /**
     * Unit for the calibration
     *
     * Generated from protobuf field <code>uint32 offsetUnits = 5;</code>
     */
    private $offsetUnits = 0;
    /**
     * Unit for the slope
     *
     * Generated from protobuf field <code>uint32 slopeUnits = 6;</code>
     */
    private $slopeUnits = 0;
    /**
     * Slope of the Calibration
     *
     * Generated from protobuf field <code>float slope = 7;</code>
     */
    private $slope = 0.0;
    /**
     * Auxiliary way of displaying slope.  Used by pH to give the percent of the nominal slope    
     *
     * Generated from protobuf field <code>float slopeAux = 8;</code>
     */
    private $slopeAux = 0.0;
    /**
     * offset of the calibration curve
     *
     * Generated from protobuf field <code>float offset = 9;</code>
     */
    private $offset = 0.0;
    /**
     * r-squared of the calibration curve
     *
     * Generated from protobuf field <code>float r2 = 10;</code>
     */
    private $r2 = 0.0;
    /**
     * Generated from protobuf field <code>repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;</code>
     */
    private $calibrationStandards;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $ID
     *           unique identifier of the calibration.  Could be a hash.
     *     @type string $userID
     *           User who performed the calibration
     *     @type int|string $time
     *           Calibration Time
     *     @type int $status
     *           Status enumeration specific to the device
     *     @type int $offsetUnits
     *           Unit for the calibration
     *     @type int $slopeUnits
     *           Unit for the slope
     *     @type float $slope
     *           Slope of the Calibration
     *     @type float $slopeAux
     *           Auxiliary way of displaying slope.  Used by pH to give the percent of the nominal slope    
     *     @type float $offset
     *           offset of the calibration curve
     *     @type float $r2
     *           r-squared of the calibration curve
     *     @type \Claros\Instrument\CalibrationStandard[]|\Google\Protobuf\Internal\RepeatedField $calibrationStandards
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\ClarosInstrumentCalibration::initOnce();
        parent::__construct($data);
    }

    /**
     * unique identifier of the calibration.  Could be a hash.
     *
     * Generated from protobuf field <code>string ID = 1;</code>
     * @return string
     */
    public function getID()
    {
        return $this->ID;
    }

    /**
     * unique identifier of the calibration.  Could be a hash.
     *
     * Generated from protobuf field <code>string ID = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setID($var)
    {
        GPBUtil::checkString($var, True);
        $this->ID = $var;

        return $this;
    }

    /**
     * User who performed the calibration
     *
     * Generated from protobuf field <code>string userID = 2;</code>
     * @return string
     */
    public function getUserID()
    {
        return $this->userID;
    }

    /**
     * User who performed the calibration
     *
     * Generated from protobuf field <code>string userID = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setUserID($var)
    {
        GPBUtil::checkString($var, True);
        $this->userID = $var;

        return $this;
    }

    /**
     * Calibration Time
     *
     * Generated from protobuf field <code>uint64 time = 3;</code>
     * @return int|string
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * Calibration Time
     *
     * Generated from protobuf field <code>uint64 time = 3;</code>
     * @param int|string $var
     * @return $this
     */
    public function setTime($var)
    {
        GPBUtil::checkUint64($var);
        $this->time = $var;

        return $this;
    }

    /**
     * Status enumeration specific to the device
     *
     * Generated from protobuf field <code>uint32 status = 4;</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Status enumeration specific to the device
     *
     * Generated from protobuf field <code>uint32 status = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkUint32($var);
        $this->status = $var;

        return $this;
    }

    /**
     * Unit for the calibration
     *
     * Generated from protobuf field <code>uint32 offsetUnits = 5;</code>
     * @return int
     */
    public function getOffsetUnits()
    {
        return $this->offsetUnits;
    }

    /**
     * Unit for the calibration
     *
     * Generated from protobuf field <code>uint32 offsetUnits = 5;</code>
     * @param int $var
     * @return $this
     */
    public function setOffsetUnits($var)
    {
        GPBUtil::checkUint32($var);
        $this->offsetUnits = $var;

        return $this;
    }

    /**
     * Unit for the slope
     *
     * Generated from protobuf field <code>uint32 slopeUnits = 6;</code>
     * @return int
     */
    public function getSlopeUnits()
    {
        return $this->slopeUnits;
    }

    /**
     * Unit for the slope
     *
     * Generated from protobuf field <code>uint32 slopeUnits = 6;</code>
     * @param int $var
     * @return $this
     */
    public function setSlopeUnits($var)
    {
        GPBUtil::checkUint32($var);
        $this->slopeUnits = $var;

        return $this;
    }

    /**
     * Slope of the Calibration
     *
     * Generated from protobuf field <code>float slope = 7;</code>
     * @return float
     */
    public function getSlope()
    {
        return $this->slope;
    }

    /**
     * Slope of the Calibration
     *
     * Generated from protobuf field <code>float slope = 7;</code>
     * @param float $var
     * @return $this
     */
    public function setSlope($var)
    {
        GPBUtil::checkFloat($var);
        $this->slope = $var;

        return $this;
    }

    /**
     * Auxiliary way of displaying slope.  Used by pH to give the percent of the nominal slope    
     *
     * Generated from protobuf field <code>float slopeAux = 8;</code>
     * @return float
     */
    public function getSlopeAux()
    {
        return $this->slopeAux;
    }

    /**
     * Auxiliary way of displaying slope.  Used by pH to give the percent of the nominal slope    
     *
     * Generated from protobuf field <code>float slopeAux = 8;</code>
     * @param float $var
     * @return $this
     */
    public function setSlopeAux($var)
    {
        GPBUtil::checkFloat($var);
        $this->slopeAux = $var;

        return $this;
    }

    /**
     * offset of the calibration curve
     *
     * Generated from protobuf field <code>float offset = 9;</code>
     * @return float
     */
    public function getOffset()
    {
        return $this->offset;
    }

    /**
     * offset of the calibration curve
     *
     * Generated from protobuf field <code>float offset = 9;</code>
     * @param float $var
     * @return $this
     */
    public function setOffset($var)
    {
        GPBUtil::checkFloat($var);
        $this->offset = $var;

        return $this;
    }

    /**
     * r-squared of the calibration curve
     *
     * Generated from protobuf field <code>float r2 = 10;</code>
     * @return float
     */
    public function getR2()
    {
        return $this->r2;
    }

    /**
     * r-squared of the calibration curve
     *
     * Generated from protobuf field <code>float r2 = 10;</code>
     * @param float $var
     * @return $this
     */
    public function setR2($var)
    {
        GPBUtil::checkFloat($var);
        $this->r2 = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getCalibrationStandards()
    {
        return $this->calibrationStandards;
    }

    /**
     * Generated from protobuf field <code>repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;</code>
     * @param \Claros\Instrument\CalibrationStandard[]|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setCalibrationStandards($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Claros\Instrument\CalibrationStandard::class);
        $this->calibrationStandards = $arr;

        return $this;
    }

}

